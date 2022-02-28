def hid(num):
    for i in range(len(num)):
        if i <= len(num) - 5:
            print(i)
            print("*",end="")
        else:
            print(num[i],end="")
hid("TanishqPrajapati")