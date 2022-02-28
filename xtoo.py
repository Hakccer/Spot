def count(str):
    o = 0;
    x = 0;
    for i in str:
        if i == "X":
            x += 1
        if i == "O":
            o += 1
    if o == x:
        print("True")
    else:
        print("False")
    print(f"X are {x}\nO are {o}")
count("TaXXOnXiOsOO")