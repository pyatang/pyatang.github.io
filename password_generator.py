#
# 密码长度8-15位
# 必须包含大小写字母和数字
# 可包含特定字符(#@~!%^) 
# 不允许123，abc（数字，字母连续3位及以上）
# 1qa,qwe(键盘斜向或横向相连3位及以上)
# 也不允许如111，aaa，@@@（数字，字母，特殊字符重复3位及以上）

# 1.随机产生8-15位的字符串
import random

digit = [1,2,3,4,5,6,7,8,9,0]
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']


# 产生8位随机数字密码

def password_generator(length=8, level=0):
    begin_string = []
        
    for i in range(8):
        random_number = 10 - round(10*random.random())
        print(random_number)
        begin_string.append(digit[random_number])
    print(begin_string) 
    new_string = ''.join(str(n) for n in begin_string)
    print(new_string)
    
	
	
password_generator()
	
