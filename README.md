This repo exists to test selenium with javascript.

In python, general keyboard and mouse emulation was handled by pyautogui.
In javascript, while I haven't found a mouse emulation library yet, I found
node-key-sender (https://www.npmjs.com/package/node-key-sender) for the
keyboard. Since this library uses a jar file, Jave Run Time is required
(version 8 or higher). Essentially, download the newest version of Java and
add the Java bin file to PATH in system variables. 

Since this script is ran using Node.js, HTML files, CSS files, live server,
and "document" aren't used. In addition, using the "node" command is necessary
to run the script file.
