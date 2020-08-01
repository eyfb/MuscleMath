import sys 
import csv


print("Output from Python") 
print("First name: " + sys.argv[1]) 
print("Last name: " + sys.argv[2]) 
  
row_list = [["SN", "Name", "Contribution"],
             [1, "Linus Torvalds", "Linux Kernel"],
             [2, "Tim Berners-Lee", "World Wide Web"],
             [3, "Guido van Rossum", "Python Programming"]]
with open('output_estimate.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(row_list)