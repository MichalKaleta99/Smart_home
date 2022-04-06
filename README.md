# Building automation system (originally based on the Raspberry Pi minicomputer)

Smart home - building automation system originally based on the Raspberry Pi minicomputer which allowed me to read various data (such as lighting intensity, temperature and humidity)
from sensors and to control the actuators such as servomechanisms (also DC motors), a fan, LED diodes and a buzzer. I also used a keyboard (which basically was just 16 
buttons) that imitated an intercom. Whole programming project was combined with self-made house mockup which photos you can see at my Github's profile.

# Necessary modification in the project

Due to the fact that not everybody is in posession of Raspberry Pi (or any other minicomputer) which allows to exchange data with IO pins I had to change the project
a little bit - I commented part of the code which is responsible for physical pins and left "only" front-end webserver with basic functionality of back-end. For example - lighting intensity is just a random value (1-100) which is then displayed at site. I decided to comment code instead of deleting it on purpose so you could see more.

Full version of the project designed for Raspberry Pi is avaible at my Github's profile in another repository.

TODO from this section - add some animations of gate, doors and fan (in replacement of physical elements).

# Login

I am currently working at basic login system. In the smart home concept it may work as a parent-control system so it only allows selected users to be in control of some functionality (for example opening and closing the entrance door).

After running web server and navigating to default page (which is at 127.0.0.1:5000) you are asked to enter login data. For that moment you can use that:
Login : Michał
Pass : dad
or
Login: Marta
Pass: mom

# Web server

To connect back-end data with front-end data I used Python's mini framework known as Flask with using methods POST and GET.

It allows me to run a web server in my local network (defaultly - IP: 127.0.0.1 at port 5000). Ultimately in the project I don't see that as the best solution - I feel that user of the real smart home should be able to control it from all around the world.

TODO from this section - transfer the project to the domain.

# SQL - read and write data (SQLite)

To create functionality such as graph of the temperature (which is displayed at the main page) or login system I had to use a database. Database system in this project isnt complicated so I used simple SQLIte database. Data is stored locally in the same folder as whole project (mydb.db).

I insert a temperature (in this version of project thats random number in range of 18-26 Celsius degrees) every one hour. Inserting script should work continously.
Every time entering the main page I select last 12 positions of temperature readings and plot it at a graph. (Axis Y - temp, Axis X - date).

I also select login information from database (ultimately user should be able to edit data)

TODO from this section - allow user to perform some edits in database from website level.

# Running project

To run a project you simply run python script called web_server.py. Then it creates a web server at 127.0.0.1:5000 and when entering - enter login (L:Michał/P:dad or L:Marta/P:mom). Then you should be able to navigate to all bookmarks visible at the screen.

Note - to insert temperature readings to database you also have to run temperature_save.py.

# Summary

The project itself hasn't been fully completed and I still got a lot of ideas to bring to life.

# TODO

* Add avatars to user's accounts (with possibility to change them)
* Add animations to actuators (or even sensors)
* Think about creating an e-mail notification system - I consider that as a good option
* Add functionality of changing user's login data
* Add TODO list of duties for kids
* Add some simple game (maybe simple clicker or Pou game) for kids
* Translate site to english language
* Migrate project at a domain

