﻿using System;
using System.Collections.Generic;
using Puerts;
using Fungus;

[Configure]
public class FungusBindConfig
{
    [Binding]
    static IEnumerable<Type> Bindings
    {
        get
        {
            return new List<Type>()
            {
                typeof(SayDialog),
                typeof(Character),
                typeof(MenuDialog),
                typeof(Stage),
                typeof(DialogHelper),
                typeof(PortraitOptions),
                typeof(PortraitController),
                typeof(FacingDirection),
                typeof(Flowchart),
            };
        }
    }
}
