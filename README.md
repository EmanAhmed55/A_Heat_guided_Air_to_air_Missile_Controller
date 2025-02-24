<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <h1>Missile Controller Web Project</h1>

  <p>This is a simple web project developed using Angular and Firebase. The purpose of the project is to simulate the control system of a missile, which includes several components that interact with each other during flight.</p>

  <h2>Components of the Missile</h2>
  <ul>
    <li>Burner</li>
    <li>Proximity Trigger</li>
    <li>Warhead</li>
    <li>Two Sets of Wings</li>
    <li>Yaw (Left, Right)</li>
    <li>Pitch (Up, Down)</li>
    <li>Launch Sensor</li>
    <li>Infra-Red Camera</li>
  </ul>

  <h2>How the Missile Controller Works</h2>
  <p>The story of the project starts as follows:</p>
  <ol>
    <li>First, the missile is launched.</li>
    <li>Half a second later, the burner is activated. The burner will be  deactivated in case of missile explosion or if an error occurs.</li>
    <li>The controller includes wings that help steer the missile towards its target. Each set of wings has 5 modes:
      <ul>
        <li>Centered</li>
        <li>Small deviation to left</li>
        <li>Small deviation to right</li>
        <li>Strong deviation to left</li>
        <li>Strong deviation to right</li>
      </ul>
    </li>
    <li>Three seconds after launch, the burner may stop, or the arming may be canceled in two cases:
      <ul>
        <li>Burner malfunction</li>
        <li>Losing the target by the camera</li>
      </ul>
    </li>
    <li>The warhead explodes if the missile is armed and the proximity trigger is activated.</li>
  </ol>

  <h2>Technologies Used</h2>
  <ul>
    <li>Angular</li>
    <li>Firebase</li>
  </ul>
</body>
</html>
