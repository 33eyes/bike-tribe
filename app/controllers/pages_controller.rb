class PagesController < ApplicationController
    def home
        @basic_plan = Plan.find(1)
        @premium_plan = Plan.find(2)
        
        @coming_soon = 1
    end
    
    def about
        
    end
end
