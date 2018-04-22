import sys, random
from locust import HttpLocust, TaskSet

def openPost(locust):
    postid = random.randint(1, 500) # generate a random number from 1 to 100 (include 1 and 100)
    url_prefix = '/blog/cs144'
    locust.client.get(url_prefix + '/' + str(postid), name=url_prefix)

class ReadTaskSet(TaskSet):
    tasks = [openPost]

class ReadLocust(HttpLocust):
    task_set = ReadTaskSet
    min_wait = 1000
    max_wait = 2000
    