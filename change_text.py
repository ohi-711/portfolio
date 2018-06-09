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
            
    
for filename in os.listdir(os.getcwd()):
    if filename.endswith(".html"): 
        print(filename)
        replace_text(filename, "<a href=\"index.html\"><img src=\"github.png\" alt=\"gh\" width=30></a>", "<a href=\"https://github.com/billyhsun?tab=overview&from=2018-05-01&to=2018-05-31\"><img src=\"github.png\" alt=\"gh\" width=30></a>") # Replace text
        continue
    else:
        continue        
print ("Done")


