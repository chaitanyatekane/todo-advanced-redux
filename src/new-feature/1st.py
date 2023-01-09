import pandas as pd

with open('prac_2.csv') as f:
    data = f.read()
    data = data.split("\n")
newData =[]
for line in data:
    newData.append(line.split(','))

print(newData)
# df = pd.DataFrame(newData,columns=['C1','C2','C3','C4','TYPE'])
# print(df)
# df.dropna(axis=0, how='any', inplace=True)
# df.to_csv('1st.csv',index=False)