---
sidebar_position: 1
---
# Introduction

The power systems is completely responsible for the:
- Accumulating energy
- Regulating voltage
- Distributing power

Energy is captured from the Sun using an array of photovoltaic cells These cells are mounted onto solar panels that adjust the voltage and current to acceptable levels for direct charging of lithium-ion batteries These criteria are
up to 4.1𝑉 and up to 0.5𝐶 per battery. Furthermore, power can be inputted from
the umbilical using the same criteria as the solar panels. The umbilical will only
be used whilst on the ground. The PMIC will automatically monitor the charging
and disable current paths to follow the prescribed charging, see Energy Storage
for more details. Most lithium-ion charging curves indicate voltage up to 4.2𝑉 and
current up to 1𝐶; however, the EPS will limit to 4.1𝑉 and 0.5𝐶 to preserve battery
health Replacing the batteries on the EPS whilst in orbit is very difficult.
The solar panel and umbilical inputs are routed through a reverse
blocking diode to prevent reverse current from flowing.


 

```bash
Bash highlight
```
 