# Day 7

The main goal of this problem is to find all of the directories with a total size of at _most_ 100000. We can do this by scanning through the commands to get an idea of the structure of the file system.

- It looks like the input always start at `/`
  - `cd whatever` essentially creates a new child directory of whatever directory we're currently on
  - although `ls` essentially gives us that information already
- so maybe the output of `ls` is all we need

it's technically faster to calculate the directory sizes as we go, but it's not possible to know the sizes when you make the directories

- because we have to ls in the directory to see what files it contains
