---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: home
title: Dataforge Labs::About
---
Dataforge is a clearing house for all my projects and sites I have out there on the interwebs. Having been around on the 'net since 1993, I've
aquired various shell accounts, open source projects, etc. This serves as the central location to all my shenannigans.

Dataforge is hosted on a dual node HP server Kubernetes cluster, as well as a barage of both retro and new gear. Everything is tied together using a Ubiquiti EdgeRouter and EdgeSwitch. Let me give you a tour! I'm very proud of my lab :)

<img src="assets/img/cluster.jpg" width="300" align="left">
<b>node1</b> - (Generic HP Workstation)
<br>
<b>node2</b> - (Generic HP Workstation)
<br>
<p>
These two run my Kubernetes cluster which, among this site, also runs pihole, my Minecraft Bedrock server and my home built backup solution. Some of the services that are in Kubernetes is my MQTT bus, home assistant and NodeRed, which is used to bus messages around the lab and control my smart home gadgets. Everything is managed using Terraform and Ansible on RedHat Enterprise Linux 8.
<br clear="left">
<br>
<img src="assets/img/indy.jpg" width="300" align="left">
<b>Aurelius</b> - (SGI Indy r5k 180mhz, 256MB, 24 Bit graphics, IRIX 6.5.22 )
<br>
<b>TBD</b> - (SGI Challenge S)
<br>
<p>
The SGI Indy is one of my favorite workstations dating from 1993 and where I got my start with UNIX. I use this system mostly for browsing around the retroweb,
gopher, Hotline (which still exists-ish) and IRC. I also use PhotoShop and CosmoCreate Studio for my personal website on tilde.team.
<p>
The Challenge is a headless server version of the Indy I'm currently rebuilding. Eventually this will be the home for my gopher.
<br clear="left">
<br>
<img src="assets/img/octane.jpg" width="300" align="left">
<b>Augustus</b> - (SGI Octane 2 r12k 400Mhz, 512MB, VPro6 graphics, IRIX 6.5.30)
<br>
<p>
This is my Octane 2. I use it for porting things and general UNIX development. I'm also starting to dabble in SoftImage
<br clear="left">
<br>
<img src="assets/img/misc.jpg" width="300" align="left">
<b>Nerva</b> - (Sun IPX, SPARC 40Mhz, 64MB, 8bit graphics, Solaris 2.6)
<br>
<b>Antonius</b> - (HP/9000 B180L, PA-RISC 180Mhz, 256MB, dual graphics, HP/UX 11.11)
<br>
<p>
These are my miscellanious project machiens. I've always wanted a Sun IPX because the form factor is cute :3
<p>
The HP is just a kick in the balls to play with. On the PC side I'm a solid HP guy so I needed an HP Unix machine. They are super fun. I see more in my future.
