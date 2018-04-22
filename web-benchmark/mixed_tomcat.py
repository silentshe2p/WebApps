import sys, random
from locust import HttpLocust, TaskSet

def openPost(locust):
    postid = random.randint(1, 500) # generate a random number from 1 to 100 (include 1 and 100)
    url_prefix = '/editor/post?action=open'
    query = '&username=cs144&postid='
    locust.client.get(url_prefix + query + str(postid), name=url_prefix)

def savePost(locust):
    postid = random.randint(1, 500)
    url_prefix = '/editor/post?action=save'
    query = '&username=cs144&title=Loading%20Test&body=***Hello%20World!***&postid='
    locust.client.post(url_prefix + query + str(postid), name=url_prefix)

class MixedTaskSet(TaskSet):
    tasks = {openPost: 9, savePost: 1}

class MixedLocust(HttpLocust):
    task_set = MixedTaskSet
    min_wait = 1000
    max_wait = 2000
