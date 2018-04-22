import sys, random, json
from locust import HttpLocust, TaskSet

def login(locust):
    response = locust.client.get('/login?username=cs144&password=password')
    if response.status_code != 200:
        print("FAIL to start with posting data to server. Make sure that your server is running.")
        sys.exit()

def savePost(locust):
    postid = random.randint(1, 500) # generate a random number from 1 to 100 (include 1 and 100)
    url_prefix = '/api/cs144'
    request_name = '/api/cs144 (update)'
    header = {'content-type': 'application/json'}
    postContent = {'title': 'Loading Test', 'body': '***Hello World!***'}
    locust.client.put(url_prefix + '/' + str(postid), data=json.dumps(postContent), headers=header, name=request_name)

class WriteTaskSet(TaskSet):
    tasks = [savePost]
    def on_start(self):
        login(self)

class WriteLocust(HttpLocust):
    task_set = WriteTaskSet
    min_wait = 1000
    max_wait = 4000
