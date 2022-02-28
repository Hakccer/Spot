# from msilib import Binary


# a = [23,32,23,23,2342,34,42,34,4,23,3,42,5,2,4,5,1]
# b = []

# while a:
#     m = a[0]
#     for f in a:
#         if f in m:
#             m = f;
#     b.append(m);
#     a.remove(m);
# print(b);
def count(str):
    c = 0;
    for i in str:
        if i == "a" or i == "e" or i == "i" or i == "o" or i == "u":
            c += 1
    print(f"There Are {c} no of Vowels")
count("aeiou")