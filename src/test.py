Pokemon = {}
command = input("Command: ")
if "Capture" in command:
 command = command.split(' ')
 Pokemon[command[1]] = command[2]
 #stores Pokemon name as key and level as value

if "Query" in command:
 command = command.split(' ')
 if command[1]] not in Pokemon:
  print("You have not captured" +  command[1] + "yet.")
 else:
