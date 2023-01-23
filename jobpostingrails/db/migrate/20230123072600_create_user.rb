class CreateUser < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.integer :phNo
      t.string :currCompany
      t.string :currCTC
      t.string :crrRole
      t.string :about
      t.string :pSkill
      t.string :skill
      t.timestamps
    end
  end
end
