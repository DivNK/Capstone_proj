class CreateCandidateapplication < ActiveRecord::Migration[7.0]
  def change
    create_table :candidateapplications do |t|
      t.belongs_to :user
      t.string :jobid
      t.string :jobcode
      t.string :jobtitle
      t.string :location
      t.date :applieddate
      t.string :candidateappstatus
      t.date :posteddate
      t.timestamps
    end
  end
end
