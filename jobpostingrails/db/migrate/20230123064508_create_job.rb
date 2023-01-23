class CreateJob < ActiveRecord::Migration[7.0]
  def change
    create_table :jobs do |t|
       t.string :jobCode
       t.string :location
       t.string :description
       t.string :type
       t.decimal :compensation
       t.string :company
       t.string :pSkill
       t.string :skill
       t.date :postedDate
      t.timestamps
    end
  end
end
