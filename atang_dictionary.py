# coding:utf-8
# 自制词典
# 1.存储单词释义
# 2.查询
# 3.添加n
# 4.用SQLite 存储

import sys
import sqlite3

# manipulate the dictionary which exist
class dictionary:
    
    def __init__(self, word):
        self.word = word
    
    def create(self):
        # create a dictionary for store initial word
        conn = sqlite3.connect('atang_ditionary.db')
        c = conn.cursor()
        # Create table
        c.execute('''CREATE TABLE dictionary
                    (id, word, definition, Chinese_definition)''')
        # Insert a row of data
        c.execute("INSERT INTO dictionary VALUES (1,'aha','express feeling','顿悟时的情绪表达词语')")
        # Save (commit) the changes
        conn.commit()
        # We can also close the connection if we are done with it.
        # Just be sure any changes have been committed or they will be lost.
        conn.close()
        
        

    def insert(self):
        print('This is insert method')
        
    
    def delete(self):
        print('This is delete method')
        
    def update(self):
        print('This is update method')
        
    def query(self):
        conn = sqlite3.connect('atang_ditionary.db')
        c = conn.cursor()
        query_word = (self.word,)
        result = c.execute("SELECT * FROM dictionary WHERE word=?", query_word)
        if c.fetchone() != None:
                print(c.fetchone()[3])
        print('Sorry there is no {} definition!'.format(self.word))
        print('*'*99)
        print('Please add the meaning of this word.')
        c.close()
        
        
if __name__ == "__main__":
    # 开始时实例对象没有传递参数
    new_dictionary = dictionary(sys.argv[1])

    new_dictionary.query()
    
