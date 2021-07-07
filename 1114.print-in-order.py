#
# @lc app=leetcode id=1114 lang=python3
#
# [1114] Print in Order
#

# @lc code=start
from threading import Barrier
class Foo:
    def __init__(self):
        self.firstBarrior = Barrier(2);
        self.secondBarrior = Barrier(2);


    def first(self, printFirst) -> None:

        # printFirst() outputs "first". Do not change or remove this line.
        printFirst()
        self.firstBarrior.wait()


    def second(self, printSecond) -> None:
        self.firstBarrior.wait()        
        # printSecond() outputs "second". Do not change or remove this line.
        printSecond()
        self.secondBarrior.wait()


    def third(self, printThird) -> None:
        self.secondBarrior.wait()        
        # printThird() outputs "third". Do not change or remove this line.
        printThird()
# @lc code=end

