---
sidebar_position: 1
---

# Subsystems

For complex interdisciplinary systems, it is beneficial to further breakdown the project into subsystems. This breakdown brings about managerial convenience. Typically, organizations have several team members with different skills sets and educational backgrounds. The teams within the organization are organized on the basis of skill set and educational backgrounds. It is of convenience to form subsystems such that these teams in the organization can work on the subsystems with little overlap between them. It should be noted that interdependence of the subsystems is unavoidable. While defining interfaces of the subsystems, it should be tried to minimise the complexity, minimise the interaction, minimise the integration efforts while trying to achieve ease in realisation or ease in testability. The interaction between the subsystems should be understood. according to our needs we have divided this project into :

## [Payload Subsystem](./category/power-system/)
The payload subsystem looks into the science of the payload, its working and implementation in the satellite. This subsystem has to have interacted with various subsystems for understanding their capabilities as well as know what all requirements it can set on the other subsystems to achieve the payload.
Structure and thermal analysis subsystem 
The mechanical subsystem is responsible for designing and manufacturing the satellite structure while ensuring that the satellite can bear all the structural and thermal loads. It is responsible for the design of deployment mechanisms.
Power Subsystem
The electrical subsystem is responsible for generation, regulation and distribution of power and handles data storage, interface between various onboard peripherals, health monitoring and provides computation required for control of the satellite.
Attitude Determination & Controls Subsystem 
The Attitude Determination and Control Subsystem (ADCS) is responsible for stabilizing the satellite in orbit and ensuring that it points in the direction it is supposed to point in.
Command and Data Handling subsystems 
The communications subsystem is responsible for establishing a link for information transfer between the satellite and the ground station.
## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 16.14 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
