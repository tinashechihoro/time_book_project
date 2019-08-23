from django.shortcuts import render

from django.views.generic.edit import FormView
from main import forms

class ContactUsView(FormView):
    template_engine = "contact_form.html"
    form_class = forms.ContactForm()
    success_url = '/'
