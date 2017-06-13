class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:update, :destroy]
  before_action :set_card, only: :create
  before_action :set_list, only: :create
  before_action :set_board, only: :create

  def create
    @activity = Activity.new(activity_params)
    if @activity.save
    else
    end
  end

  def update
    if @activity.update(activity_params)
    else
    end
  end

  def destroy
    if @activity.delete
    else
    end
  end

  private

  def activity_params
    params.require(:activity).permit(:memo).merge(params.permit(:card_id))
  end

  def set_activity
    @activity = Activity.find(params[:id])
  end

  def set_card
    @card = Card.find(params[:card_id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_board
    @board = Board.find(params[:board_id])
  end
end
