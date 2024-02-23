from django.urls import path
from . import views

urlpatterns = [
    path('',views.index,name='index'),
    path('evaluate/', views.evaluate_expression, name='evaluate_expression'),
    path('calculator/', views.calculator_view, name='calculator_view'),

]
