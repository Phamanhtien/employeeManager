use master

if DB_ID('employeeManager') is not null 
	begin
		drop database employeeManager
	end

create database employeeManager

use employeeManager

create table Employee (
	[id] int identity(1,1) primary key,
	[avatar] varchar(500),
	[full_name] nchar(50) not null,
	[phone] nchar(15) not null,
	[address] nchar(200) not null,
	[team_id] int not null,
	[sex] bit not null,
	[age] int not null,
	[start_date] date not null,
	[salary_per_hour] money
)

create table Employee_Working_Date (
	[id] int identity(1,1) primary key,
	[employee_id] int not null,
	[date] date not null,
	[hour] float not null,
)

create table Employee_Working_Advance (
	[id] int identity(1,1) primary key,
	[employee_id] int not null,
	[date] date not null,
	[money] money not null,
)

create table Team (
	[id] int identity(1,1) primary key,
	[name] nchar(50) not null,
	[manager_id] int not null,
)



--create clustered index clustered_index_Employee_Working_Date_employeeId on Employee_Working_Date([employee_id])
----Alter table Employee_Working_Date drop constraint PK__Employee__3213E83F4F2DB6EE

--create index index_Employee_teamId on Employee(teamId)

--example data
--EmployeeData
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('1.jpg','Tyson Waterhouse','7-782-856-0753','Lakewood',0,0,25,'3/18/2020',463.375755066227);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('2.jpg','Clint Chadwick','4-453-607-3558','Otawa',2,1,29,'5/12/2020',174.8791713579);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('3.jpg','Nancy Irwin','8-435-878-1223','Oakland',0,1,37,'10/31/2018',737.332315987596);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('4.jpg','Johnny Archer','8-146-052-2314','Irving',3,1,20,'2/19/2001',639.721319376361);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('5.jpg','Henry Rodgers','6-467-412-8028','Worcester',1,0,38,'10/21/2003',938.493369723434);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('6.jpg','Brad Stuart','5-356-678-8250','Houston',0,1,18,'9/23/2014',640.206633649863);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('7.jpg','Julianna Palmer','8-762-806-4445','Reno',3,1,33,'1/11/2014',240.192765156363);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('8.jpg','Danny Butler','2-503-030-5731','Hayward',2,1,21,'11/17/2008',702.562892070768);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('9.jpg','Enoch Miller','1-861-424-4864','Saint Paul',2,1,20,'1/14/2011',332.876530903334);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('10.jpg','Anne Richards','0-880-548-1381','Madrid',3,1,22,'5/9/2018',578.128999440059);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('11.jpg','Christy Heaton','8-554-785-7782','Tulsa',2,1,20,'3/14/2018',504.630965320222);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('12.jpg','Aileen Stewart','4-626-548-5287','Lancaster',0,0,20,'7/17/2018',307.360698561352);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('13.jpg','Ethan Price','1-462-262-4210','Colorado Springs',3,0,28,'9/8/2000',379.635049628855);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('14.jpg','Madison Gray','0-172-526-4302','Houston',1,1,23,'7/8/2002',106.14208512853);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('15.jpg','Eve Woods','3-223-136-1023','Denver',4,0,32,'5/9/2018',264.070848195381);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('16.jpg','Oliver Bingham','1-513-310-5546','Rochester',4,1,33,'1/21/2019',132.879591416977);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('17.jpg','Monica Griffiths','4-546-325-2158','El Paso',1,0,19,'12/25/2004',464.884962073939);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('18.jpg','George Wilton','1-446-788-4460','Amarillo',0,1,26,'8/26/2002',708.796091191841);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('19.jpg','Harry Little','5-440-037-2623','Louisville',0,0,36,'1/26/2004',379.200965957344);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('20.jpg','Alice Bloom','0-051-207-7212','Escondido',0,0,37,'6/15/2003',68.1139443102823);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('21.jpg','Alexander Hogg','8-672-512-7440','Huntsville',0,0,19,'5/30/2015',878.258211575569);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('22.jpg','Morgan Rust','2-681-501-2172','Huntsville',4,0,33,'2/26/2004',585.664538838744);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('23.jpg','Evie Needham','2-650-022-7340','Santa Ana',0,0,32,'4/9/2007',123.389514753776);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('24.jpg','Charlotte Shields','6-208-278-2503','Fullerton',1,1,24,'11/2/2008',323.248618137207);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('25.jpg','Barney Ralph','4-867-287-2146','Houston',3,1,32,'2/16/2013',754.496298155513);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('26.jpg','Jules Wills','0-641-144-6155','Lyon',3,0,23,'11/30/2013',67.9913677130786);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('27.jpg','Alma Upsdell','3-014-564-6770','Innsbruck',4,0,21,'6/2/2015',379.076111211943);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('28.jpg','Havana Flett','4-242-741-1768','Prague',4,1,37,'3/17/2010',218.531154318029);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('29.jpg','Aiden Malone','1-078-173-5407','Houston',4,0,26,'3/17/2002',304.408833573297);
INSERT INTO Employee ([avatar],[full_name],[phone],[address],[team_id],[sex],[age],[start_date],[salary_per_hour]) VALUES('30.jpg','Ryan Notman','4-571-605-6164','Tallahassee',2,1,38,'2/3/2012',48.380590001764);
update Employee set team_id = team_id + 1

--TeamData
INSERT INTO Team ([name], [manager_id]) VALUES('Chronicles of Narnia',3);
INSERT INTO Team ([name], [manager_id]) VALUES('The Conjuring',5);
INSERT INTO Team ([name], [manager_id]) VALUES('Wonder Woman',8);
INSERT INTO Team ([name], [manager_id]) VALUES('The Godfather',4);
INSERT INTO Team ([name], [manager_id]) VALUES('Thor : Ragnarok',22);
--Employee_Working_Date
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (1,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (2,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (3,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (4,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (5,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (6,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (7,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (8,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (9,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (10,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (11,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (12,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (13,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (14,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (15,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (16,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (17,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (18,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (19,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (20,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (21,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (22,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (23,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (24,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (25,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (26,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (27,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (28,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (29,'3/1/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (30,'3/1/2022',8)

INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (1,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (2,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (3,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (4,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (5,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (6,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (7,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (8,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (9,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (10,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (11,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (12,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (13,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (14,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (15,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (16,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (17,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (18,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (19,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (20,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (21,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (22,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (23,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (24,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (25,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (26,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (27,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (28,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (29,'3/2/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (30,'3/2/2022',8)

INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (1,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (2,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (3,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (4,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (5,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (6,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (7,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (8,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (9,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (10,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (11,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (12,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (13,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (14,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (15,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (16,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (17,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (18,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (19,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (20,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (21,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (22,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (23,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (24,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (25,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (26,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (27,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (28,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (29,'3/3/2022',8)
INSERT INTO Employee_Working_Date ([employee_id],[date],[hour]) VALUES (30,'3/3/2022',8)

-- create foreign key

-- Employee_Working_Date reference to Employee
alter table Employee_Working_Date add constraint fk_Employee_Working_Date_employee foreign key (employee_id) references Employee(id)  ON DELETE CASCADE
-- Employee_Working_Advance reference to Employee
alter table Employee_Working_Advance add constraint fk_Employee_Working_Advance_employee foreign key (employee_id) references Employee(id)  ON DELETE CASCADE
-- Employee reference to team
alter table Employee add constraint fk_employee_team foreign key (team_id) references Team(id)  ON DELETE NO ACTION
-- Team manager reference to Employee
alter table Team add constraint fk_team_employee foreign key (manager_id) references Employee(id)  ON DELETE NO ACTION
