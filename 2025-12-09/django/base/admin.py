from django.contrib import admin
from .models import Product
from .models import Song
from .models import Category
# Register your models here.

admin.site.register(Product)
admin.site.register(Song)
admin.site.register(Category)
