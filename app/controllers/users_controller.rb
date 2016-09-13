class UsersController < ApplicationController
  before_action :authenticate_user!
  respond_to :html, :json
  
  def index
    @users = User.all
  end
  
  def show
    @user = User.find( params[:id] )
    @user_check = (@user == current_user)
#    if @user_check == true
#      flash[:success] = "Looking at my own page! (users controller)"
#    else
#      flash[:success] = "Looking at someone else's page! (users controller)"
#    end
    @interests = @user.interests
    @interest_groups = Interest.group_interests(@interests)
  end
  
  
  
end