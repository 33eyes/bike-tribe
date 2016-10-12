class EarlyInvitesController < ApplicationController
  def new
    @coming_soon = 1
    @early_invite = EarlyInvite.new
  end
  
  def create
    @coming_soon = 1
    @early_invite = EarlyInvite.new(early_invite_params)
    if @early_invite.save
      flash[:early_invite_thanks] = "Thank you! You're now on the early access list."
      redirect_to new_early_invite_path
    else
      flash[:early_invite_error] = "Please enter a valid email address and try again."
      redirect_to new_early_invite_path
    end
  end
  
  private
    def early_invite_params
      params.require(:early_invite).permit(:email)
    end
  
end