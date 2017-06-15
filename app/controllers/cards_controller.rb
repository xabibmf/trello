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

  def destroy
    @target_card = Card.find(destroy_params[:id])
    @target_card.activities.destroy_all
    @target_card.move_to_bottom
    @target_card.delete
  end

  def sort
    new_list_id = sort_params[:new_list_id].split('_')[1]
    target_card = Card.find(sort_params[:card_id])
    if sort_params[:list_id] == new_list_id
      target_card.insert_at(sort_params[:position].to_i + 1)
    else
      target_card.move_to_bottom
      new_list_count = List.find(new_list_id).cards.count.to_i + 1
      target_card.update(list_id: new_list_id, position: new_list_count)
      if new_list_count != 1
        target_card.insert_at(sort_params[:position].to_i + 1)
      end
    end
    render body: nil
  end

  private

  def card_params
    params.require(:card).permit(:name, :details).merge(params.permit(:list_id))
  end

  def destroy_params
    params.permit(:id)
  end

  def sort_params
    params.permit(:board_id, :list_id, :card_id, :position, :new_list_id)
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
