from django.db import models

# Create your models here.
class Category(models.Model):
    name = models.CharField(max_length=100, unique=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    category = models.ForeignKey(
        Category,
        on_delete=models.SET_NULL,   # delete category → products keep NULL
        null=True,
        blank=True,
        related_name="products"
    )

class Product(models.Model):
    desc = models.CharField(max_length=50,null=True,blank=True)
    price = models.DecimalField(max_digits=5,decimal_places=2)
    createdTime=models.DateTimeField(auto_now_add=True)
    fields =['desc','price']

    def __str__(self):
            return f"{self.desc} {self.price}"
    

class Song(models.Model):
    desc = models.CharField(max_length=50,null=True,blank=True)
    Time = models.DecimalField(max_digits=5,decimal_places=2)
    createdTime=models.DateTimeField(auto_now_add=True)
    fields =['desc','Time']

    def __str__(self):
            return f"{self.desc} {self.Time}"