class ChangeName < ActiveRecord::Migration[7.0]
  def change
    rename_column :jobs, :skillsRequired, :skillsrequired
    rename_column :jobs, :jobTitle, :jobtitle
    rename_column :jobs, :jobDescription, :jobdescription
    rename_column :jobs, :companyName, :companyname
    rename_column :jobs, :jobType, :jobtype
    rename_column :jobs, :postedDate, :posteddate
    rename_column :jobs, :applicationStatus, :applicationstatus
    rename_column :jobs, :jobCode, :jobcode
  end
end
