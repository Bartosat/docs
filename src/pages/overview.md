---
title: Overview
description: Bartosat subsystems
---
# Overview
In this doc we will discuss about our project breifly

## The Payload
The Cubesat will have the payloads of a LoRa module and a camera module. The LoRa (Long Range) technology currently under development is a spread spectrum modulation technique derived from chirp spread spectrum technology. It is a possible solution to modern problems due to its long range data transmission, low power consumption and thus, finds application in the field of telecommunication and Internet of Things (IoT). The module used in the satellite will be used for communication with other satellites and the ground station to demonstrate its usage. The primary telecommunication means for the satellite will still remain the conventional radio communication system. The camera module will be used to produce high resolution images of earth’s topography to ground stations.
## Subsystems
The entire project is divided into 7 subsystems namely: 
- Payload
- Power system 
- Structural and thermal analysis 
- Attitude determination and control 
- Telemetry and communication 
- Ground station 
- On board computer
### Power System
The electrical power system (EPS) consists of solar panels and batteries. Solar panels hold solar cells that convert the solar light from the sun to electricity. Batteries take up a lot of mass and volume on the already tightly packed CubeSat. A major design challenge is placing the solar panels, either on the sides of the CubeSat itself, or having deploying solar panels. Having deployable panels adds solar cell area but also an extra mechanical complexity. For the panels to deploy, they need a burn wire release mechanism, and every mechanical system adds the possibility of a failure. If the panel does not deploy properly, the CubeSat will not have any power and even if everything else is functioning properly, the CubeSat will fail due to the lack of power.
### Structural and thermal analysis
CubeSats range in size from 1 U to 3 U. They’re always 10×10 cm in length and width, but their height can vary from 11.35 to 34.05 cm.
### Telemetry and communication
The communications system (COM) is severely limited by the amount of power available, which is usually around 2W. Compared to Boeing’s 702SP Spacecraft, which uses a Xenon Electrostatic ion thruster system (XIPS), operates in the low- to mid-power range of satellites, and has three to eight kilowatts of power, CubeSats’ power is exponentially less.

CubeSats use radio-communication systems in VHF, UHF, F-, S-, C- and X-band. The satellite uses an antenna, usually deployed once in orbit to help with communication. Antennas range from commercial measuring tape to more complicated inflatable dish antennas.
### Attitude determination and control
The attitude determination and control system (ADCS) controls the orientation of the CubeSat with respect to an inertial frame of reference and includes reaction wheels, magnetorquers, thrusters, star trackers, sun and Earth sensors, angular rate sensors and GPS receivers and antennas. This complex system is needed because when the satellite is first deployed, for example via NanoRacks from the International Space Station, it is tumbling. Some CubeSats can operate in this state, but others require pointing accuracy and location knowledge.
### On board computer
The On board computer system interfaces with the payload to do various tasks which might include image processing, data analysis, and data compression. Some CubeSats have even used smartphones as the CDHS