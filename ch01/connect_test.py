import pymysql

#1.연결
conn = pymysql.connect(host='localhost', user='harin', password='q1w2e3',
                       db='shopping_db')
#2. 커서
cur = conn.cursor()
#3. 쿼리 작성
cur.execute('select avg(age) from CUSTOMER where address="경기"');
# 4. 조회한 데이터 출력
result = cur.fetchone()
print(int(result[0]))
            
#5. 연결 종료
cur.close()
conn.close()
