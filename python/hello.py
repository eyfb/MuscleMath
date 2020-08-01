import sys 
import csv


print("Output from Python") 
print("First name: " + sys.argv[1]) 
print("Last name: " + sys.argv[2]) 

ret_data = load_data()
print(ret_data)

# Try to read a csv
def load_data():
    data = dict()
    with open('./test_csvs/test.csv') as f:
        reader = csv.DictReader(f)
        print('hellllo')
        for row in reader:
            id = row["id"]
            data[id] = {"id": id, "first_name": row["first_name"], "last_name": row["last_name"], "Weight": row["Weight"], "Height": row["Height"], "BMI": row["BMI"]}
    return data

print('end python')
sys.stdout.flush()

# Writing to a csv

# row_list = [["SN", "Name", "Contribution"], [1, "Linus Torvalds", "Linux Kernel"], [2, "Tim Berners-Lee", "World Wide Web"], [3, "Guido van Rossum", "Python Programming"]]
# with open('output_estimate.csv', 'w', newline='') as file:
#     writer = csv.writer(file)
#     writer.writerows(row_list)
