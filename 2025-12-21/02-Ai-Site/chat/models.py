from django.db import models

class Conversation(models.Model):
    AGENT_CHOICES = [
        ('fast', 'Fast Agent (Flash)'),
        ('accurate', 'Accurate Agent (Pro)'),
    ]

    question = models.TextField()
    answer = models.TextField()
    agent_type = models.CharField(max_length=10, choices=AGENT_CHOICES)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.question[:50]}..."