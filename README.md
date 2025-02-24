A simple web project by using Angular and firebase.This web project is about a missile that contains a burner, a proximity trigger, a warhead , two sets of wings , yaw (left ,right) , pitch ( up ,down) , a launch sensor , and an infra-red camera
The story of the project starts as first the missile launched then a half a second later , the burner will be activated and will be unactivated in case of missile explosion or occurrence of errors.
This controller has wings to shoot the target.Each set of wings has 5 modes which are : centered , small deviation to left /right and strong deviation to each direction.
After 3  seconds from launching , the burner may stop or the arming will be cancelled  in two cases which are: burner malfunction or losing target by camera.
The warhead explodes in one case which is arming the missile and activating the detected proximity.
