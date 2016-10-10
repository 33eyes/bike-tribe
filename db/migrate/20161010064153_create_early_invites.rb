class CreateEarlyInvites < ActiveRecord::Migration
  def change
    create_table :early_invites do |t|
      t.string :email
      
      t.timestamps
    end
  end
end
