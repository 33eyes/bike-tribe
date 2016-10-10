class EarlyInvitesController < ApplicationController
  def new
    @early_invite = EarlyInvite.new
  end
  def create
  end
end