class CardsController < ApplicationController
  before_action :set_card, only: :update
  before_action :set_list, only: :create
    before_action :set_board, only: :create
  def create
    @activity = Activity.new
    @card = Card.new(card_params)
    if @card.save
    else
    end
  end

  def update
    if @card.update(card_params)
    else
    end
  end

  private

  def card_params
    params.require(:card).permit(:name, :details).merge(params.permit(:list_id))
  end

  def set_card
    @card = Card.find(params[:id])
  end

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_board
    @board = Board.find(params[:board_id])
  end
end
