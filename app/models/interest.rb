class Interest < ActiveRecord::Base
  belongs_to :topic
  belongs_to :user
  
  def self.group_interests(interests)
    interest_groups = [[], [], []]
    
    interests.each do |interest|
      case interest.experience_level
        when 1 then interest_groups[0].push(interest)
        when 2 then interest_groups[1].push(interest)
        when 3 then interest_groups[2].push(interest)
      end
    end
    interest_groups
  end

end
