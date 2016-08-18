class UsersController < ApplicationController
  before_action :authenticate_user!
  
  def index
    @users = User.all
  end
  
  def show
    @user = User.find( params[:id] )
    @interests = @user.interests
    @interest_groups = Interest.group_interests(@interests)
  end
end