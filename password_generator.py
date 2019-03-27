#
# 密码长度8-15位
# 必须包含大小写字母和数字
# 可包含特定字符(#@~!%^) 
# 不允许123，abc（数字，字母连续3位及以上）
# 1qa,qwe(键盘斜向或横向相连3位及以上)
# 也不允许如111，aaa，@@@（数字，字母，特殊字符重复3位及以上）

# 1.随机产生8-15位的字符串
import random
import sys


symbol = ['#', '@', '~', '!', '%', '^']
digit = [1,2,3,4,5,6,7,8,9,0]
alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
digit_alphabet = [1,2,3,4,5,6,7,8,9,0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
symbol_digit_alphabet = [1,2,3,4,5,6,7,8,9,0, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n','o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#', '@', '~', '!', '%', '^']


# 产生8位随机数字密码
# 修改为N位随机数字密码,从命令行传递length的值

def produce_random_number(length, level=0):
    begin_string = []
        
    for i in range(length):
        random_number = abs(round(10*random.random()-1))
        print(random_number)
        begin_string.append(digit[random_number])
    print(begin_string) 
    new_string = ''.join(str(n) for n in begin_string)
    print(new_string)

# 增加"__main__", 成为一个可以调用的模块
# 描述错误，应该为增加 __name__ == "__main__" 后可以让该模块成为一个可执行的脚本


# 产生8位随机字母密码
def produce_random_string(length, level=0):
    begin_string = []
    for i in range(length):
        random_number = abs(round(52*random.random()-1))
        print(random_number)
        begin_string.append(alphabet[random_number])
    print(begin_string)
    new_string = ''.join(str(n) for n in begin_string)
    print(new_string) 



# 产生包含大小写字母和数字的密码
# 修改为从特殊符号，大小写字母和数字的列表中随机抽取8-15数
def produce_random_password(length, level=0):
    begin_string = []
    for i in range(length):
        random_number = abs(round(68*random.random()-1))
        ## print(random_number)
        begin_string.append(symbol_digit_alphabet[random_number])
    ## print(begin_string)
    new_string = ''.join(str(n) for n in begin_string)
    
    print(new_string) 



if __name__ == "__main__":
    
    # 修改为传递2个两个参数，分别为产生随机数字和随机字母的位数length 
#    produce_random_number(int(sys.argv[1]))
#    produce_random_string(int(sys.argv[2]))


    produce_random_password(int(sys.argv[1]))
 
	
	

