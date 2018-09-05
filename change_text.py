import fileinput
import os

        
def replace_text(filename, original_text, replaced_text):
    with open(filename, 'r+', encoding="utf-8") as file:
        Lines = file.readlines()
        a = 0;
        for x in range (len(Lines)):
            if Lines[x].find(original_text) != -1:
                print ("1")
                Lines[x] = Lines[x].replace(original_text, replaced_text)
                print (Lines[x])
                a = 1
            else:
                continue
        if a == 1:
            file.seek(0)
            file.truncate()
            file.writelines(Lines)
    return

#Modify
prev_string = "<div class=\"button\"><a href=\"index.html\" style=\"color: #e6e6e6; text-decoration: none; padding: 15px 15px\">Home</a></div>\n"
new_string = ""

for filename in os.listdir(os.getcwd()):
    if filename.endswith(".html"): 
        print(filename)
        replace_text(filename, prev_string, new_string) # Replace text
        continue
    else:
        continue        
print ("Done")


