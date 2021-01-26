using UnityEngine;

namespace Black_Rabbit
{
	[AddComponentMenu("Black-Rabbit/CameraController/FreeLookCam")]
	//第三人称摄像头插件
	public class ThirdPersonCamera : MonoBehaviour,ICameraController
	{
		public float mouseSensitivity = 6;
		public CameraTarget target;
		public float dstFromTarget = 4;
		public Vector2 pitchMinMax = new Vector2(-40, 85);

		public float rotationSmoothTime = .12f;
		Vector3 rotationSmoothVelocity;
		Vector3 currentRotation;

		float yaw;
		float pitch;

		void Start()
		{
			if (target==null)
			{
				target = CameraTarget.Instance;
			}
			
		}


		void LateUpdate()
		{
			yaw += Input.GetAxis("Mouse X") * mouseSensitivity;
			pitch -= Input.GetAxis("Mouse Y") * mouseSensitivity;
			pitch = Mathf.Clamp(pitch, pitchMinMax.x, pitchMinMax.y);

			currentRotation = Vector3.SmoothDamp(currentRotation, new Vector3(pitch, yaw), ref rotationSmoothVelocity, rotationSmoothTime);
			transform.eulerAngles = currentRotation;

			transform.position = target.transform.position - transform.forward * dstFromTarget;

		}

	}
}

