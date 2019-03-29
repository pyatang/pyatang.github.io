# coding:utf-8
'''
   自制词典 home_made dictionary
   1.查询单词
   2.判断是否有含义
     有->展示
     没有->提示需要创建单词释义
   
   3.单词的含义和单词以字典形式存储
   4.新建的字典内容存放在另一个txt文本中
   

'''

import sys
import os


with open("words_alpha.txt") as f:
    read_words = f.readlines()


class word_reader:
    
    def __init__(self, word):
        self.word = []
        

    def provide_meaning(self, word='aha'):
        print("---"*10)

    def provide_chinese(self, word='aha'):        
        print("---"*10)

   




new_reader = word_reader('aha')


if  __name__ == "__main__":
    new_reader.provide_chinese()
    
    with open("new_words.txt", 'w+') as f:
        new_file = f
        for i in range(len(read_words)):            
            new_file.writelines("Number {0} is {1}".format(i+1, read_words[i]))
            if i < len(read_words) -1 :
                new_file.writelines('-----'*10)
                new_file.writelines('\n')
        

    new_reader.provide_meaning()
            



        

    

