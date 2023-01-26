class CreateCandidateprofiles < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateprofiles do |t|
      t.string :fname
      t.string :lname
      t.string :email
      t.string :phone
      t.string :address
      t.string :about
      t.string :currentorg
      t.string :currentctc
      t.string :experience
      t.string :role
      t.string :skills
      t.string :expectedctc
      t.string :location
      t.string :cvlink
      t.string :pic


      t.timestamps
    end
  end
end
