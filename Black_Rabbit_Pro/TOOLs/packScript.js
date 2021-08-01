const archiver = require("archiver")
const path = require("path")
const fs = require("fs")

let output = fs.createWriteStream(path.join(__dirname, "../Assets/StreamingAssets/pack.zip"));

const archive = archiver('zip', {
    zlib: { level: 9 } // Sets the compression level.
})

output.on('close', function () {
    console.log(archive.pointer() + ' total bytes');
    console.log('archiver has been finalized and the output file descriptor has closed.');
});

// This event is fired when the data source is drained no matter what was the data source.
// It is not part of this library but rather from the NodeJS Stream API.
// @see: https://nodejs.org/api/stream.html#stream_event_end
output.on('end', function () {
    console.log('Data has been drained');
});

archive.on('warning', function (err) {
    if (err.code === 'ENOENT') {
        // log warning
    } else {
        // throw error
        throw err;
    }
});

// good practice to catch this error explicitly
archive.on('error', function (err) {
    throw err;
});

archive.pipe(output);
archive.file(path.join(__dirname, "../Assets/StreamingAssets/GameConfig.json"), { name: 'GameConfig.json' });
archive.file(path.join(__dirname, "../Assets/StreamingAssets/GamePacks.json"), { name: 'GamePacks.json' });
archive.directory(path.join(__dirname, "../Assets/StreamingAssets/JS"), "JS");
archive.directory(path.join(__dirname, "../Assets/StreamingAssets/Game"), "Game");
//GamePacks
archive.directory(path.join(__dirname, "../Assets/StreamingAssets/GamePacks"), "GamePacks");

archive.finalize();