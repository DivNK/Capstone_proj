class ChangeCandidateprofile < ActiveRecord::Migration[7.0]
  def change
    change_column :candidateapplications, :jobid, 'integer USING CAST(jobid AS integer)' 
  end
end
