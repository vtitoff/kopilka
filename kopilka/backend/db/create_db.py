import psycopg2
from psycopg2.extensions import ISOLATION_LEVEL_AUTOCOMMIT

# ������������� ���������� � postgres
connection = psycopg2.connect(user="postgres", password="1111")
connection.set_isolation_level(ISOLATION_LEVEL_AUTOCOMMIT)

# ������� ������ ��� ���������� �������� � ����� ������
cursor = connection.cursor()

# ������� ���� ������
cursor.execute('create database sqlalchemy_tuts')
# ��������� ����������
cursor.close()
connection.close()