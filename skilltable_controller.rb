class SkilltableController < ApplicationController
    skip_before_action :verify_authenticity_token
    def index
        render json: Skilltable.all;
    end

    def create
        v = !params[:skillname].empty? 
        if (v)
        Skilltable.create(
            'skillname': params[:skillname]
                                                             
                                                           
            )
            puts p
          render json: "Data Added"
        else
        render json: "Data not added"
        end

    end    

    def update 
        p = Skilltable.find(params[:id].to_i)
        p.update('skillname': params[:skillname])
        render json: "Data is Updated"
    end

    def destroy
        p = Skilltable.find(params[:id].to_i)
        p.destroy
    end    



end
