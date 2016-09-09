class InterestsController < ApplicationController
  respond_to :html, :json
 
  def show 
    @interest = Interest.find(params[:id])
  end
 
  def update
    @interest = Interest.find(params[:id])
    # @interest.update_attributes(params[:interest])
    
    if @interest.update_attributes(interest_params)
      flash[:warning] = "Interest updated!"
      # redirect_to user_path( params[:user_id] )
    # else
    #   render action: :edit
    end
    
    respond_with @interest
  end

  def destroy
    @interest = Interest.find(params[:id])
    @interest.destroy
    
    redirect_to(current_user) 
    #redirect_to action: :index
  end

  private
    def interest_params
      params.require(:interest).permit(:interest_description)
    end
    #def only_current_user
    #  @user = User.find( params[:user_id] )
    #  redirect_to(root_url) unless @user == current_user
    #end


end